import useAPI from "@/hooks/api/use-api/use-api";

import { useQuery } from "react-query";

import User from "@/models/user/user";
import { personsKey } from "./constants";
import Person from "@/models/person/person";

const usePersons = () => {
  const api = useAPI();
  const queryKey = personsKey.all();

  const { data: persons = [], isLoading } = useQuery<Person[]>(
    queryKey,
    function fetchPersons() {
      return api.getMe.getPersonClient().get();
    }
  );

  return {
    persons,
    isLoading,
  };
};

export default usePersons;
