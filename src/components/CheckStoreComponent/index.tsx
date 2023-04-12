import { observer } from "mobx-react-lite"
import { StoreContext } from "../../Mobx/store";
import { useContext } from "react";

const CheckStoreComponent = observer(() => {
const {todoList} = useContext(StoreContext);

  return (
    <div className="App">
        Component only to check if store deeps worked 
        <br />
        {todoList.tasks.map(t => <>{t.title}<br /></>)}
    </div>
  )
})

export default CheckStoreComponent;
