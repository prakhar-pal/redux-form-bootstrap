import { LabelValue } from "../common/interfaces/CommonProps";

const getIdFromLabel = (label: LabelValue) => {
    return typeof label === typeof String() ? label : (label as any).value;
}

export default getIdFromLabel;
