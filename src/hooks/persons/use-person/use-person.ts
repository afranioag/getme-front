import useAPI from "@/hooks/api/use-api/use-api";

import { useQuery } from "react-query";

import Person from "@/models/person/person";
import { personsKey } from "../use-persons/constants";

const usePerson = (id: string) => {
  const api = useAPI();
  const queryKey = personsKey.byId(id);

  const { data: person = null, isLoading } = useQuery<Person>(
    queryKey,
    function fetchPersons() {
      return api.getMe.getPersonClient().getById(Number(id));
    }
  );

  return {
    person,
    isLoading,
  };
};

export default usePerson;
