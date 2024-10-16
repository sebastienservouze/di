import {Type} from "./Type";
import {MetadataKeys} from "./DIMetadataKeys.enum";

/**
 * Decorator to mark a class as a dependency.
 * Will be used by the container to resolve dependencies.
 *
 * @constructor
 */
export const Dependency = (): (target: Type<any>) => void => {
    return (target: Type<any>): void => {
        Reflect.defineMetadata(MetadataKeys.IsDependency, true, target);
    };
}