import React from 'react';
import {
    BrowserRouter as Router,
    Route,
    Link,
    Switch
} from "react-router-dom";
import AdminHomePage from '../Components/Admin/AdminHomePage'
import CampaignInsert from '../Components/Admin/Campaign/CampaignInsert';
import CampaignList from '../Components/Admin/Campaign/CampaignList';


function Body() {
    return (
        <div>
            <Switch>
                {/* Admin */}
                <Route path="/home" exact> <AdminHomePage />  </Route>
                <Route path="/campaign" exact> <CampaignList />  </Route>
                <Route path="/campaign/insert" exact> <CampaignInsert />  </Route>



            </Switch>
        </div>
    )
}

export default Body;
