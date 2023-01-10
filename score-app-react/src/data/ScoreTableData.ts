export type TeamObjectType = {
  logo: string;
  name: string;
  score: number;
};

export type ScoreObject = {
  team1: TeamObjectType;
  team2: TeamObjectType;
  date: string;
};

export const scores = [
  {
    team1: {
      logo: 'https://www.seekpng.com/png/full/15-159909_manchester-city-fc-badge-man-city-logo-png.png',
      name: 'Manchester City',
      score: 3,
    },
    team2: {
      logo: 'https://upload.wikimedia.org/wikipedia/en/thumb/c/cc/Chelsea_FC.svg/270px-Chelsea_FC.svg.png',
      name: 'Chelsea',
      score: 3,
    },
    date: '2023-01-04',
  },
  {
    team1: {
      logo: 'https://upload.wikimedia.org/wikipedia/en/thumb/a/a2/Crystal_Palace_FC_logo_%282022%29.svg/640px-Crystal_Palace_FC_logo_%282022%29.svg.png',
      name: 'Crystal Palace',
      score: 0,
    },
    team2: {
      logo: 'https://upload.wikimedia.org/wikipedia/en/thumb/b/b4/Tottenham_Hotspur.svg/1200px-Tottenham_Hotspur.svg.png',
      name: 'Tottenham',
      score: 4,
    },
    date: '2023-01-05',
  },
  {
    team1: {
      logo: 'https://upload.wikimedia.org/wikipedia/en/thumb/f/f9/Aston_Villa_FC_crest_%282016%29.svg/1200px-Aston_Villa_FC_crest_%282016%29.svg.png',
      name: 'Aston Villa',
      score: 1,
    },
    team2: {
      logo: 'https://upload.wikimedia.org/wikipedia/en/thumb/f/fc/Wolverhampton_Wanderers.svg/1200px-Wolverhampton_Wanderers.svg.png',
      name: 'Wolves',
      score: 1,
    },
    date: '2023-01-05',
  },
  {
    team1: {
      logo: 'https://upload.wikimedia.org/wikipedia/en/thumb/5/54/Leeds_United_F.C._logo.svg/1200px-Leeds_United_F.C._logo.svg.png',
      name: 'Leeds United',
      score: 2,
    },
    team2: {
      logo: 'https://upload.wikimedia.org/wikipedia/en/thumb/c/c2/West_Ham_United_FC_logo.svg/1200px-West_Ham_United_FC_logo.svg.png',
      name: 'West Ham',
      score: 2,
    },
    date: '2023-01-05',
  },
] satisfies ScoreObject[];
