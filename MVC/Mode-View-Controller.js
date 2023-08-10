class Model {
    constructor(){
      this.data=[];
    }
  
    addItem(item){
      this.data.push(item);
      this.notifyChange();
    }
  
    getData(){
      return this.data.slice();
    }
  
    notifyChange(){
      this.onChange(this.data);
    }
  
    setChangeListener(callback){
      this.onChange = callback;
    }
  }

  class View{
    constructor(){
      this.listElement=document.getElementById('item-list');
    }
  
    render(data){
      this.listElement.innerHTML='';
      data.forEach(item=>{
        const listItem=document.createElement('li');
        listItem.textContent=item;
        this.listElement.appendChild(listItem);
      });
    }
  }

  class Controller{
    constructor(model, view){
      this.model=model;
      this.view=view;
  
      this.model.setChangeListener(this.handleModelChange.bind(this));
      this.view.listElement.addEventListener('click',this.handleItemClick.bind(this));
    }
  
    handleModelChange(data){
      this.view.render(data);
    }
  
    handleItemClick(event){
      if (event.target.tagName==='LI') {
        const newItem=prompt('Agregar un nuevo elemento:');
        if (newItem) {
          this.model.addItem(newItem);
        }
      }
    }
  }
