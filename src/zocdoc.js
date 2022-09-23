/** 
(1) Given two lists, one of actors, and one of movies (each index connects actor to its movie),  provide a way to return the list of movies for a given actor.

Actors = [Brad Pitt, Jennifer Lawrence, Angelina Jolie, Edward Norton, Edward Norton, 
Will Smith, Brad Pitt, Liv Tyler]
 
Movies =  [MrMsSmith, Xmen, MrMsSmith, FightClub, Hulk, BadBoys, FightClub, Hulk]
(2) Given two dictionaries with actorToMovies and movieToActors. We state that if two actors were in same movie, they're friends. And if actorA is friend with ActorB and ActorB has played with ActorC, transitively actorA and C are friends.

Make a function that will return if two actors are friends or not.

actorToMovies =
{
    { Angelina Jolie: MrMsSmith },
    { Brad Pitt: MrMsSmith, FightClub  },
    { Jennifer Lawrence: Xmen },
    { Edward Norton: FightClub, Hulk },
    { Will Smith: BadBoys },
    { Liv Tyler: Hulk },
}
  
movieToActors =
{
    { MrMsSmith: Brad Pitt, Angelina Jolie },
    { Xmen: Jennifer Lawrence },
    { FightClub: Brad Pitt, Edward Norton },
    { BadBoys: Will Smith },
    { Hulk: Edward Norton, Liv Tyler},
}
*/

// Step 1
const actors = [
  "Brad Pitt",
  "Jennifer Lawrence",
  "Angelina Jolie",
  "Edward Norton",
  "Edward Norton",
  "Will Smith",
  "Brad Pitt",
  "Liv Tyler"
];

const movies = [
  "MrMsSmith",
  "Xmen",
  "MrMsSmith",
  "FightClub",
  "Hulk",
  "BadBoys",
  "FightClub",
  "Hulk"
];

export const moviesByActor = () => {
  if (!actors.length === movies.length) {
    return {};
  }
  let map = {};
  actors.forEach((actor, i) => {
    if (map[actor]) {
      map[actor].push(movies[i]);
    } else {
      map[actor] = [movies[i]];
    }
  });
  return map;
};

// Step 2
const actorToMovies = {
  "Angelina Jolie": ["MrMsSmith"],
  "Brad Pitt": ["MrMsSmith", "FightClub"],
  "Jennifer Lawrence": ["Xmen"],
  "Edward Norton": ["FightClub", "Hulk"],
  "Will Smith": ["BadBoys"],
  "Liv Tyler": ["Hulk"]
};

const movieToActors = {
  MrMsSmith: ["Brad Pitt", "Angelina Jolie"],
  Xmen: ["Jennifer Lawrence"],
  FightClub: ["Brad Pitt", "Edward Norton"],
  BadBoys: ["Will Smith"],
  Hulk: ["Edward Norton", "Liv Tyler"]
};

export const areFriends = (a, b, maxLevel = 2) => {
  // keep track of visited people
  // keep track of visited movies
  // start with acotrToMovies
  // push first actor to the stack
  // @ for movies for acotr
  // if movie not seen already
  // look for each actors in movie
  // if actor === b return true ! else continue
  // if actor not seen yet, push actor to stack
  // then go back. Pop from stack
  // @ for movies for actor
  // if movie not seen arleady[...]

  // if max level is two levels of friends we can
  if (!actorToMovies[a] || !actorToMovies[b]) {
    return false;
  }
  const seenActor = new Set();
  const seenMovies = new Set();
  const q = [];
  q.push([a, 0]);
  // q.push(a);
  while (q.length > 0) {
    console.log(`something`);
    let [actor, level] = q.shift();
    // let actor = q.shift();
    console.log(`Dequeued actor ${actor}, level:${level}`);
    if (level > maxLevel) {
      console.log(`We've reached our max level`);
      return false;
    }
    if (seenActor.has(actor)) {
      console.log(`We've already seen that actor, skip`);
      continue; // we've already tackled that actor
    }
    if (actor === b) {
      console.log(`${actor} is the one we're looking for. They're friends`);
      return true;
    }
    console.log(`Adding actor to 'seen'`);
    seenActor.add(actor);
    if (actorToMovies[actor]) {
      console.log(actorToMovies[actor]);
      for (let m of actorToMovies[actor]) {
        console.log(`Checking on movie ${m}`);
        if (movieToActors[m] && !seenMovies.has(m)) {
          console.log(
            `Movie not 'seen' yet so checking it, and adding it to seen`
          );
          seenMovies.add(m);
          for (let a of movieToActors[m]) {
            if (!seenActor.has(a)) {
              console.log(`Pushing actor ${a} to queue!`);
              q.push([a, level + 1]);
              // q.push(a);
            }
          }
        }
      }
    }
  }
  console.log(`queue is empty. We're done`);
  return false;
};
