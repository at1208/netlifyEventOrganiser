import React from 'react';
import ReactDOM from 'react-dom';
import App from './component/app'
import AllEvent from './component/pages/allevents'
import CreateEvent from './component/pages/createevent'
import UpdateEvent from './component/pages/updateevent'
import DeleteEvent from './component/pages/deleteevent'
import { BrowserRouter, Route } from 'react-router-dom';

ReactDOM.render(
  <div>
     <BrowserRouter>
     <div>
        <Route path="/" component={App} />
        <Route path="/createEvent" component={CreateEvent} />
        <Route path="/allEvent" component={AllEvent} />
        <Route path="/updateEvent" component={UpdateEvent} />
        <Route path="/deleteEvent" component={DeleteEvent} />
    </div>
     </BrowserRouter>
</div>, document.getElementById('root'));
