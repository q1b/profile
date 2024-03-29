<script >import { createEventDispatcher } from 'svelte';
import { fly } from 'svelte/transition';
export let selected;
export let options;
export let input = null;

if (!selected) selected = [];
if (!(options?.length > 0)) console.error(`MultiSelect missing options`);

const dispatch = createEventDispatcher();
let activeOption, searchText;
let showOptions = false;

$: filteredOptions = searchText
    ? options.filter((option) => option.toLowerCase().includes(searchText.toLowerCase()))
    : options;
$: if ((activeOption && !filteredOptions.includes(activeOption)) ||
    (!activeOption && searchText))
    activeOption = filteredOptions[0];
function add(token) {
    if ( !selected.includes(token) ) {
        searchText = ``; // reset search string on selection
        selected = [token, ...selected];
        if ( ( Array.isArray(selected) ) || typeof selected === `string` ) {
            setOptionsVisible(false);
            input?.blur();
        }
        dispatch(`add`, { token });
        dispatch(`change`, { token, type: `add` });
    }
}
function remove(token) {
    if (typeof selected === `string`)
        return;
    selected = selected.filter((item) => item !== token);
    dispatch(`remove`, { token });
    dispatch(`change`, { token, type: `remove` });
}
function setOptionsVisible(show) {
    // nothing to do if visibility is already as intended
    if (show === showOptions)
        return;
    showOptions = show;
    if (show)
        input?.focus();
}
function handleKeydown(event) {
    if (event.key === `Escape`) {
        setOptionsVisible(false);
        searchText = ``;
    }
    else if (event.key === `Enter`) {
        if (activeOption) {
            selected.includes(activeOption) ? remove(activeOption) : add(activeOption);
            searchText = ``;
        } // no active option means the options are closed in which case enter means open
        else
            setOptionsVisible(true);
    }
    else if ([`ArrowDown`, `ArrowUp`].includes(event.key)) {
        const increment = event.key === `ArrowUp` ? -1 : 1;
        const newActiveIdx = filteredOptions.indexOf(activeOption) + increment;
        if (newActiveIdx < 0) {
            activeOption = filteredOptions[filteredOptions.length - 1];
        }
        else {
            if (newActiveIdx === filteredOptions.length)
                activeOption = filteredOptions[0];
            else
                activeOption = filteredOptions[newActiveIdx];
        }
    }
    else if (event.key === `Backspace`) {
        // only remove selected tags on backspace if if there are any and no searchText characters remain
        if (selected.length > 0 && searchText.length === 0) {
            selected = selected.slice(0, selected.length - 1);
        }
    }
}

$: isSelected = (option) => {
    if (!(selected?.length > 0))
        return false; // nothing is selected if `selected` is the empty array or string
    else
        return selected.includes(option);
};

const handleEnterAndSpaceKeys = (handler) => (event) => {
    if ([`Enter`, `Space`].includes(event.code)) {
        event.preventDefault();
        handler();
    }
};

</script>

<!-- z-index: 2 when showOptions is true ensures the ul.tokens of one <MultiSelect /> display above those of another following shortly after it -->
<div class="multiselect" style={showOptions ? `z-index: 2;` : ``} on:mouseup|stopPropagation={() => setOptionsVisible(true)} >
  <!-- <ExpandIcon height="14pt" style="padding-left: 1pt;" /> -->
  <ul class="tokens">
      <span on:mouseup|self|stopPropagation={() => setOptionsVisible(true)}>
        {selected}
      </span>
      {#each selected as tag}
        <li
          on:mouseup|self|stopPropagation={() => setOptionsVisible(true)}>
          {tag}
        </li>
      {/each}
  </ul>
  {#key showOptions}
    <ul
      class="options"
      class:hidden={!showOptions}
      transition:fly={{ duration: 300, y: 40 }}>
      {#each filteredOptions as option}
        <li
          on:mouseup|preventDefault|stopPropagation
          on:mousedown|preventDefault|stopPropagation={() => {
            isSelected(option) ? remove(option) : add(option)
          }}
          class:selected={isSelected(option)}
          class:active={activeOption === option}>
          {option}
        </li>
      {/each}
    </ul>
  {/key}
</div>

<style>
  :where(.multiselect) {
    position: relative;
    margin: 1em 0;
    border: var(--sms-border, 1pt solid lightgray);
    border-radius: var(--sms-border-radius, 5pt);
    align-items: center;
    min-height: 18pt;
    display: flex;
    cursor: text;
  }
  :where(.multiselect:focus-within) {
    border: var(--sms-focus-border, 1pt solid var(--sms-active-color, cornflowerblue));
  }
  :where(.multiselect.readonly) {
    background: var(--sms-readonly-bg, lightgray);
  }

  :where(ul.tokens > li) {
    background: var(--sms-token-bg, var(--sms-active-color, cornflowerblue));
    align-items: center;
    border-radius: 4pt;
    display: flex;
    margin: 2pt;
    padding: 0 0 0 1ex;
    transition: 0.3s;
    white-space: nowrap;
    height: 16pt;
  }
  :where(ul.tokens > li button, button.remove-all) {
    align-items: center;
    border-radius: 50%;
    display: flex;
    cursor: pointer;
    transition: 0.2s;
  }
  :where(button) {
    color: inherit;
    background: transparent;
    border: none;
    cursor: pointer;
    outline: none;
    padding: 0 2pt;
  }
  :where(ul.tokens > li button:hover, button.remove-all:hover) {
    color: var(--sms-remove-x-hover-focus-color, lightskyblue);
  }
  :where(button:focus) {
    color: var(--sms-remove-x-hover-focus-color, lightskyblue);
    transform: scale(1.04);
  }

  :where(.multiselect input) {
    border: none;
    outline: none;
    background: none;
    color: var(--sms-text-color, inherit);
    flex: 1; /* this + next line fix issue #12 https://git.io/JiDe3 */
    min-width: 2em;
  }

  :where(ul.tokens) {
    display: flex;
    padding: 0;
    margin: 0;
    flex-wrap: wrap;
    flex: 1;
  }

  :where(ul.options) {
    list-style: none;
    max-height: 50vh;
    padding: 0;
    top: 100%;
    width: 100%;
    position: absolute;
    border-radius: 1ex;
    overflow: auto;
    background: var(--sms-options-bg, white);
  }
  :where(ul.options.hidden) {
    visibility: hidden;
  }
  :where(ul.options li) {
    padding: 3pt 2ex;
    cursor: pointer;
  }
  :where(ul.options li.selected) {
    border-left: var(
      --sms-li-selected-border-left,
      3pt solid var(--sms-selected-color, green)
    );
    background: var(--sms-li-selected-bg, inherit);
    color: var(--sms-li-selected-color, inherit);
  }
  :where(ul.options li:not(.selected):hover) {
    border-left: var(
      --sms-li-not-selected-hover-border-left,
      3pt solid var(--sms-active-color, cornflowerblue)
    );
    border-left: 3pt solid var(--blue);
  }
  :where(ul.options li.active) {
    background: var(--sms-li-active-bg, var(--sms-active-color, cornflowerblue));
  }
  :where(ul.options li.disabled) {
    background: var(--sms-li-disabled-bg, #f5f5f6);
    color: var(--sms-li-disabled-text, #b8b8b8);
    cursor: not-allowed;
  }
  :where(ul.options li.disabled:hover) {
    border-left: unset;
  }
</style>
