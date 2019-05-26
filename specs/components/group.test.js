import React from 'react';
import { mount } from 'enzyme';

import Group from '../../src/components/group';

const data = {
  day: '2019-07-22T19:01:33.476Z',
  events: [
    {
      id: 1,
      title: 'Event 1',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque pretium nulla non arcu aliquam rhoncus eu sed leo. Aenean cursus nibh sit amet fringilla sodales. Vestibulum faucibus venenatis tempor. Morbi placerat ac massa id ultricies.',

      image:
        'https://s3-us-west-2.amazonaws.com/agendaedu-dev/schools/c5c1a933-cdef-4c9b-8a87-490f25c2538d/events/5380/attachments/1550866911-$1-original-poster-agendakids.jpeg',
      startAt: '2019-07-22T19:01:33.476Z'
    },
    {
      id: 2,
      title: 'Event 2',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque pretium nulla non arcu aliquam rhoncus eu sed leo. Aenean cursus nibh sit amet fringilla sodales. Vestibulum faucibus venenatis tempor. Morbi placerat ac massa id ultricies.',

      image:
        'https://s3-us-west-2.amazonaws.com/agendaedu-dev/schools/c5c1a933-cdef-4c9b-8a87-490f25c2538d/events/5380/attachments/1550866911-$1-original-poster-agendakids.jpeg',
      startAt: '2019-07-22T19:01:33.476Z'
    },
    {
      id: 3,
      title: 'Event 3',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque pretium nulla non arcu aliquam rhoncus eu sed leo. Aenean cursus nibh sit amet fringilla sodales. Vestibulum faucibus venenatis tempor. Morbi placerat ac massa id ultricies.',

      image:
        'https://s3-us-west-2.amazonaws.com/agendaedu-dev/schools/c5c1a933-cdef-4c9b-8a87-490f25c2538d/events/5380/attachments/1550866911-$1-original-poster-agendakids.jpeg',
      startAt: '2019-07-22T19:01:33.476Z'
    }
  ]
};

describe('<Group />', () => {
  const wrapper = mount(<Group item={data} />);
  it('render all events', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
