import axios, { AxiosResponse } from "axios";
import { useMutation, useQuery, useQueryClient } from "react-query";
import { AddCMDReq, DelCMDReq } from "../utils/APITypes";
import { ReqURL } from "../utils/APIEndpoints";

export type CMDList = { [c: string]: string };

const fetchCmds = (apiKey: string) => {
  return axios.get(`${ReqURL.getCmds}${apiKey}`, {
    withCredentials: true,
  });
};

export const useGetCmdData = (
  apikey: string,
  onSuccess: () => void,
  onError: () => void
) => {
  return useQuery<AxiosResponse<CMDList>, Error>(
    "user-cmds",
    () => fetchCmds(apikey),
    {
      onSuccess,
      onError,
    }
  );
};

type AddCmdData = {
  apiKey: string;
  body: AddCMDReq;
};

const addCmd = (data: AddCmdData) => {
  return axios.put(`${ReqURL.addCmd}${data.apiKey}`, data.body, {
    withCredentials: true,
    headers: { "Content-Type": "application/json" },
  });
};

export const useAddCmdData = () => {
  const queryClient = useQueryClient();
  return useMutation(addCmd, {
    onSuccess: () => {
      queryClient.invalidateQueries("user-cmds");
    },
  });
};

type DelCmdData = {
  apiKey: string;
  body: DelCMDReq;
};

const delCmd = (data: DelCmdData) => {
  return axios.put(`${ReqURL.delCmd}${data.apiKey}`, data.body, {
    withCredentials: true,
    headers: { "Content-Type": "application/json" },
  });
};

export const useDelCmdData = () => {
  const queryClient = useQueryClient();
  return useMutation(delCmd, {
    onSuccess: () => {
      queryClient.invalidateQueries("user-cmds");
    },
    onError: (error) => console.error("error: ", error),
  });
};