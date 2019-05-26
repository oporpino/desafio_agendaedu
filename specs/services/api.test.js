import axios from 'axios';

import AgendaEdu from '../../src/services/api';

jest.mock('axios');

const events = {
  data: [
    {
      id: 1,
      title: 'Event 1',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque pretium nulla non arcu aliquam rhoncus eu sed leo. Aenean cursus nibh sit amet fringilla sodales. Vestibulum faucibus venenatis tempor. Morbi placerat ac massa id ultricies.',
      sendAt: '2019-03-07T00:34:35.327Z',
      image:
        'https://s3-us-west-2.amazonaws.com/agendaedu-dev/schools/c5c1a933-cdef-4c9b-8a87-490f25c2538d/events/5380/attachments/1550866911-$1-original-poster-agendakids.jpeg',
      startAt: '2019-07-22T19:01:33.476Z',
      location: 'Fake Street, 1001 - Fortaleza CE'
    },
    {
      id: 2,
      title: 'Event 2',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque pretium nulla non arcu aliquam rhoncus eu sed leo. Aenean cursus nibh sit amet fringilla sodales. Vestibulum faucibus venenatis tempor. Morbi placerat ac massa id ultricies.',
      sendAt: '2019-03-07T00:34:35.327Z',
      image:
        'https://s3-us-west-2.amazonaws.com/agendaedu-dev/schools/c5c1a933-cdef-4c9b-8a87-490f25c2538d/events/5380/attachments/1550866911-$1-original-poster-agendakids.jpeg',
      startAt: '2019-07-22T19:01:33.476Z',
      location: 'Fake Street, 1001 - Fortaleza CE'
    },
    {
      id: 3,
      title: 'Event 3',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque pretium nulla non arcu aliquam rhoncus eu sed leo. Aenean cursus nibh sit amet fringilla sodales. Vestibulum faucibus venenatis tempor. Morbi placerat ac massa id ultricies.',
      sendAt: '2019-03-07T00:34:35.327Z',
      image:
        'https://s3-us-west-2.amazonaws.com/agendaedu-dev/schools/c5c1a933-cdef-4c9b-8a87-490f25c2538d/events/5380/attachments/1550866911-$1-original-poster-agendakids.jpeg',
      startAt: '2019-07-22T19:01:33.476Z',
      location: 'Fake Street, 1001 - Fortaleza CE'
    }
  ],
  metadata: {
    page: 1,
    limit: 2,
    pre_page: null,
    next_page: 2,
    total: 100,
    total_pages: 50
  }
};

describe('AgendaEdu', () => {
  it('returns events grouped by day', async () => {
    let response = { data: events };
    axios.get.mockResolvedValue(response);

    AgendaEdu.initialize('token@3456');
    const params = { limit: 10 };
    const result = await AgendaEdu.events(params);

    expect(result.data).toEqual(events.data);
    expect(axios.get).toHaveBeenCalledTimes(1);

    expect(axios.get).toHaveBeenCalledWith(
      AgendaEdu.instance().baseURL + '/events',
      { headers: AgendaEdu.instance().headers(), params: params }
    );
  });
});
