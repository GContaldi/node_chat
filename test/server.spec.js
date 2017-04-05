import { expect } from 'chai';
import io from 'socket.io-client';
import server from '../src/server';
import { sendMessage, ADD_MESSAGE } from '../src/app/actions';

describe('Server', function() {
  describe('socket connection', () => {
    const client = io.connect(`http://localhost:${server.get('port')}`);

    describe('when client send a message', () => {
      it('broadcast and action to all client with the proper payload', (done) => {
        const MESSAGE_TEXT = 'my message';

        client.on('action', (action) => {
          if (action.type === ADD_MESSAGE) {
            expect(action.message).to.eql({
              username: client.id.substr(0, 6),
              text: MESSAGE_TEXT
            });
          }
          done();
        });
        client.emit('action', sendMessage(MESSAGE_TEXT));
      });
    });
  });
});
