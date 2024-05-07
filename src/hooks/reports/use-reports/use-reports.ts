import useAPI from '@/hooks/api/use-api/use-api'

import { useQuery } from 'react-query'

import { reportsKey } from './constants'
import Report from '@/models/report/report'

const useReports = (auth: boolean) => {
    const api = useAPI()
    const queryKey = reportsKey.all()

    const {
        data: reports = [],
        isLoading
    } = useQuery<Report[]>(
        queryKey,
        function fetchReports() {
            if (auth) {
                return api.getMe.getReportClient().getAuthenticated()
            }
            return api.getMe.getReportClient().get()
        }
    )

    return {
        reports,
        isLoading,
    }
}

export default useReports