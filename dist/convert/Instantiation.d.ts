import { AppIntf } from "../intf/AppIntf";
import { ComponentIntf } from "../intf/ComponentIntf";
import { PageIntf } from "../intf/PageIntf";
export declare const instantiation: <T extends new (...args: any[]) => AppIntf | PageIntf | ComponentIntf>(intf: T) => void;
//# sourceMappingURL=Instantiation.d.ts.map