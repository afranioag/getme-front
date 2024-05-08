import useAPI from "@/hooks/api/use-api/use-api";

import { useQuery } from "react-query";

import Report from "@/models/report/report";
import { reportsKey } from "../use-reports/constants";

const useReport = (id: string) => {
  const api = useAPI();
  const queryKey = reportsKey.byId(id);

  const { data: report = null, isLoading } = useQuery<Report>(
    queryKey,
    function fetchReport() {
      return api.getMe.getReportClient().getById(id);
    }
  );

  return {
    report,
    isLoading,
  };
};

export default useReport;
