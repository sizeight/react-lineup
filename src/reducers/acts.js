const initialState = [
  {
        id: 1,
        title: 'Queen',
        stage: 'Main stage',
        date: '2016/03/18',
        begin: '12:00',
        end: '13:00',
    },
    {
        id: 2,
        title: 'Metallica',
        stage: 'Main stage',
        date: '2016/03/18',
        begin: '13:00',
        end: '14:00',
    },
    {
        id: 3,
        title: 'The Prodigy',
        stage: 'Electronic stage',
        date: '2016/03/18',
        begin: '12:00',
        end: '13:00',
    },
    {
        id: 4,
        title: 'The Chemical Brothers',
        stage: 'Electronic stage',
        date: '2016/03/18',
        begin: '13:00',
        end: '14:00',
    },
];

export default function acts(state = initialState, action) {
  switch (action.type) {
    default:
      return state;
  }
}
