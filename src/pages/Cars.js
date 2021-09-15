
import React from 'react'
import store from '../redux/store'


function SearchCar({searchCar, dispatch}) {
    return (
        <div>
            <form>
                <input placeholder="search cars.." onChange={(event) => searchCar}/>
            </form>
        </div>
    )
}

function allcars(props) {
    return (
        <div>
            <h1>hii</h1>
        </div>
    )
}


function Cars() {

  const state = store.getState();
  const dispatch = store.dispatch;
  // const visibleAllCars = getFilteredCars(state.allCars, state.searchTerm);
    return (
    <main>
        <section>
            <SearchCar  searchCar={state.searchCar} dispatch={state.dispatch}/>
        </section>
        <hr />
        <section>
            <h1>all cars</h1>
            <allcars allcars={state.allcars} dispatch={dispatch} />
        </section>
    </main>
    )
}

export default Cars;
