import Message from '../../../src/components/shared/Message';
import { mount } from '@cypress/react';

describe('Shared - Message', () => {
  it('Html', () => {
    const sender = 'SenderName';
    const text = 'Lorem Ipsum';
    const time = '5:14pm';
    mount(<Message sender={sender} text={text} time={time} />, {
      stylesheets: ['../../../src/components/shared/Message/style.module.css'],
    });
  });
});
