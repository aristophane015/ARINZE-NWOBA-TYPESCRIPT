type User = {
    id: number;
    name: string;
    email: string;
    type: 'user'; // User type
  };
  
  type Admin = {
    id: number;
    name: string;
    email: string;
    type: 'admin'; // Admin type
  };
  
  type Person = User | Admin; // Union of both User and Admin
  
  // filterPersons function
  function filterPersons(personType: 'user' | 'admin', criteria: Partial<User | Admin>): Person[] {
    const people: Person[] = [
      { id: 1, name: 'Arinze', email: 'arinze@gmail.com', type: 'user' },
      { id: 2, name: 'Ada', email: 'ada@gmail.com', type: 'admin' },
      { id: 3, name: 'Charlie', email: 'charlie@gmail.com', type: 'user' },
      { id: 4, name: 'David', email: 'david@gmail.com', type: 'admin' },
    ];
  
    return people.filter((person) => {
      // Check that the person type matches the filter
      if (person.type !== personType) return false;
  
      // Check the other criteria (but not the 'type' field)
      for (let key in criteria) {
        if (criteria[key as keyof typeof criteria] !== person[key as keyof Person]) {
          return false;
        }
      }
  
      return true; // If all criteria match
    });
  }
  