import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';

import { Image } from 'react-native';

import Event from '../../src/components/event';

import { FlatList } from 'react-native-gesture-handler';

const eventWithImage = {
  id: 1,
  title: 'Event 1',
  description:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque pretium nulla non arcu aliquam rhoncus eu sed leo. Aenean cursus nibh sit amet fringilla sodales. Vestibulum faucibus venenatis tempor. Morbi placerat ac massa id ultricies.',

  image:
    'https://s3-us-west-2.amazonaws.com/agendaedu-dev/schools/c5c1a933-cdef-4c9b-8a87-490f25c2538d/events/5380/attachments/1550866911-$1-original-poster-agendakids.jpeg',
  startAt: '2019-07-22T19:01:33.476Z'
};

const eventWithoutImage = {
  id: 1,
  title: 'Event 1',
  description:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque pretium nulla non arcu aliquam rhoncus eu sed leo. Aenean cursus nibh sit amet fringilla sodales. Vestibulum faucibus venenatis tempor. Morbi placerat ac massa id ultricies.',

  startAt: '2019-07-22T19:01:33.476Z'
};

describe('<Event />', () => {
  it('render with image', () => {
    const wrapper = shallow(<Event item={eventWithImage} />);

    expect(wrapper.find(Image)).toHaveLength(1);

    expect(wrapper).toMatchSnapshot();
  });

  it('render with image', () => {
    const wrapper = shallow(<Event item={eventWithoutImage} />);

    expect(wrapper.find(Image)).toHaveLength(0);

    expect(wrapper).toMatchSnapshot();
  });
});
