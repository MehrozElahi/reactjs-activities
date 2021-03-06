import { observer } from "mobx-react-lite";
import React, { useEffect } from "react";
import { Grid } from "semantic-ui-react";
import LaodingComponent from "../../../app/layout/LoadingComponent";
import { useStore } from "../../../app/stores/store";

import ActivityList from "./ActivityList";


// export default function ActivityDashboard(props: Props) {
export default observer( function ActivityDashboard() {
  
  const {activityStore} = useStore();
  const {loadActivities,activityRegistry} = activityStore;

  useEffect(() => {
    if(activityRegistry.size <=1)  loadActivities();
  }, [activityRegistry.size, loadActivities]);
  if (activityStore.loadingInitial) return <LaodingComponent content="Loading App" />;


  return (
    <Grid>
      <Grid.Column width="10">
      <ActivityList />
      </Grid.Column>
      <Grid.Column width="6">
        <h2>Activity Filter</h2>
          {/* {selectedActivity && !editMode &&
          <ActivityDetails 
         
          ></ActivityDetails> }
        { editMode &&
          <ActivityForm />} */}
      </Grid.Column>
    </Grid>
  );
})
