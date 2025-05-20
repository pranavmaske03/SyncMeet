import axios from "axios";
import { LANGUAGE_VERSIONS } from "../constants/LanguageConstant";
import { version } from "react";

const API = axios.create({
    baseURL: "https://emkc.org/api/v2/piston",
});

export const executeCode = async ({ language,sourceCode}) => {
    console.log(language,sourceCode);
    const responce = await API.post("/execute", {
        language: language,
        version: LANGUAGE_VERSIONS[language],
        files: [
            {
                content: sourceCode,
            },
        ],
    });
    console.log(responce);
    return responce.data;
};