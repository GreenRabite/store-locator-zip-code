import React from 'react';
import DeliveryBox from './delivery_box';

class MainForm extends React.Component{
  constructor(props){
    super(props);
    this.state={
      zipcode: "",
      error: false,
      stores: []
    };
    this.handleUpdate = this.handleUpdate.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.parseResponse = this.parseResponse.bind(this);
  }

  // Handles state update from inputting in the zip code
  handleUpdate(field){
    return (e) => {
      this.setState({
        [field]: e.target.value
      });
    };
  }

  // Handles the submittal of the zipcode. Sends out an API call. Depending
  // on the response, it either comes back with an error prompting the
  // user to try again or it will display the results by feeding the
  // DeliveryBox component with the store data
  handleSubmit(e){
    e.preventDefault();
    this.setState({error: false});
    fetch(`https://shipt-zip-code-test-api.herokuapp.com/api/zip_codes/${this.state.zipcode}`)
    .then(function(response){
      return response.json();
    })
    .then((json)=>{
      if (json.error) {
        return this.setState({
          stores: [],
          error: true
        });
      }else {
        let parseStores = this.parseResponse(json);
        return this.setState({
          stores: parseStores
        });
      }
    });
  }

  // Function that parses a positive response from the API call.
  // This function will sort the store by store name (in alphabetical order)
  // From this set, each store's launch date will be parsed and store
  // in an array for further analysis
  parseResponse(res){
    const sortedStores = res.stores.sort((a,b)=>{
      return a.name > b.name ? 1 : -1;
    });
    let parseStores = [];
    sortedStores.forEach(store=>{
      let date = new Date(store.launch_date);
      const year = date.getFullYear();
      const month = date.getMonth();
      const day = date.getDate();
      let today = new Date();
      const openYet = date <= today;
      let parseStore = {
        name: store.name,
        id: store.id,
        year,
        month,
        day,
        openYet
      };
      parseStores.push(parseStore);
    });
    return parseStores;
  }

  render(){
    let errorMsg = <p id="error-msg">This zipcode is invalid! Please try again.</p>;
    let locationImg = this.state.error ? <img src="./images/location2.svg"></img> : <img src="./images/location.svg"></img>;
    let exclamPt = this.state.error ? <img align="right" src="./images/exclam-point.png"></img> : "";
    return(
      <div id="state-container">
        <div id="mainbox">
          <div id="target-container">
            <div>Target exclusive offer.</div>
            <div>$49 membership (reg. $99) + $15 credit with qualifying purchase.*</div>
            <form>
              <article id="search">
                <div id="search-btn">
                  <div id="location">
                    {locationImg}
                    <input type="text"
                      className={this.state.error ? "error" : ""}
                      placeholder="Enter ZIP code"
                      onChange={this.handleUpdate("zipcode")}
                      value={this.state.zipcode} />
                    {exclamPt}
                  </div>
                  <button onClick={(e)=>this.handleSubmit(e)} className="green-temp gs-btn">Get Started</button>
                </div>
              </article>
            </form>
            {this.state.error ? errorMsg : ""}
            <div>*Membership offer valid for new members only. Target order
              of $100 or more must be placed to qualify for $15 credit,
              which expires 30 days after qualifying order is placed and
              can be applied to any order from Shipt.</div>
          </div>
        </div>
        <DeliveryBox stores={this.state.stores}/>
      </div>
    );
  }
}

export default MainForm;
