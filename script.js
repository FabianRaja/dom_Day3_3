let a=document.querySelector(".formSection");
let b=document.querySelector(".tableSection");

a.addEventListener("submit",function(event){
  event.preventDefault();

  const firstName=document.getElementById("first-name").value;
  const lastName=document.getElementById("last-name").value;
  const address=document.getElementById("address").value;
  const pincode=document.getElementById("pincode").value;
  const city=document.getElementById("inputCity").value;
  const state=document.getElementById("inputState").value;

  const selectOptions=Array.from(document.getElementById("mySelect").selectedOptions);
  const selectOptionsValue=selectOptions.map(option=>option.textContent).join(', ');
  if(selectOptions.length<2){
    alert("Favorite Foods : Please select min 2 options, Use Ctrl to select more than 1")
    return
  }
  
  function radioValue(){
    let element=document.getElementsByName("gender");
    for(let i=0;i<element.length;i++){
      if(element[i].checked){
          return element[i].value;
      }
    }
  }

  const newRow=b.insertRow();
  const cell0=newRow.insertCell(0);
  const cell1=newRow.insertCell(1);
  const cell2=newRow.insertCell(2);
  const cell3=newRow.insertCell(3);
  const cell4=newRow.insertCell(4);
  const cell5=newRow.insertCell(5);
  const cell6=newRow.insertCell(6);
  const cell7=newRow.insertCell(7);

  cell0.innerHTML=firstName;
  cell1.innerHTML=lastName;
  cell2.innerHTML=radioValue();
  cell3.innerHTML=selectOptionsValue;
  cell4.innerHTML=address;
  cell5.innerHTML=pincode;
  cell6.innerHTML=city;
  cell7.innerHTML=state;

  a.reset();

})

