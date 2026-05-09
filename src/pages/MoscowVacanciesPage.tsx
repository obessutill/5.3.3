import { useLoaderData } from "react-router-dom";
import { VacancyList } from "../components/VacancyList";

export const MoscowVacanciesPage = () => {
    const data = useLoaderData() as VacanciesResponse

    return <VacancyList data={data} />
}