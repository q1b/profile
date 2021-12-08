import { annotate } from "rough-notation";
import type { RoughAnnotation, RoughAnnotationConfig } from "rough-notation/lib/model";

let applyConfig;
let updateVisible;
interface RoughAnnotationConfigBase extends RoughAnnotationConfig {
    visible: boolean
}

export default function(node:HTMLElement, config:RoughAnnotationConfigBase ) : any {
  if(applyConfig === undefined ){
    applyConfig= (target, c:RoughAnnotationConfig ): void => {
      for(const key in c) {
        if(key !== 'visible' && (!c.hasOwnProperty ||  Object.prototype.hasOwnProperty.call( c , key ))) {
          const value = c[key];
          if(target[key] !== value) {
            target[key] = value;
          }
        }
      }
    }
  }
  updateVisible = (visible) => {
    if(visible) {
      annotation.show();
    } else {
      annotation.hide();
    }
  }

  const annotateConfig:RoughAnnotationConfig = {
    type: "underline"
  };

  applyConfig(annotateConfig, config );
  
  const annotation:RoughAnnotation = annotate(node, annotateConfig);

  updateVisible( config.visible );

  return {
    update(newConfig) {
      applyConfig(annotation, newConfig);  
      updateVisible(newConfig.visible);
    },
    destroy() {
      annotation.remove();
    }
  }
}