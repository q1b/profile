
export function typewriter(node: HTMLElement, label:string ): { destroy:any, update:any } {
	const typewriter = new Typewriter( node, {
		loop: false,
		delay: 75,
    cursor: ''
	});
  const typed = typewriter.typeString(label).pauseFor(300).start();

  return {
    update(){
      typed.start();
      console.log(label)
    },
    destroy(){
      typed.deleteAll();
    }
  }
}
