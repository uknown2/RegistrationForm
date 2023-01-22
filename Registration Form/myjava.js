function submitdetail() {
    //alert(document.getElementById("exampleInputEmail1").value)
    var email = document.getElementById("exampleInputEmail1").value;
    var username = document.getElementById("exampleInputUsername1").value;
    var phonenumber = document.getElementById("exampleInputphonenumber").value;
    var age = document.getElementById("exampleInputAge").value;
    var gender = document.getElementById("exampleInputGender").value;
    var address = document.getElementById("exampleInputAddress").value;
    
    var password = document.getElementById("exampleInputPassword1").value;

    document.getElementById('userform').innerHTML = `<div class="card" style="width: 18rem;">
    <ul class="list-group list-group-flush">
      <li class="list-group-item">Email :${email}</li>
      <li class="list-group-item">Full Name :${username}</li>
      <li class="list-group-item">Phone Number :${phonenumber}</li>
      <li class="list-group-item">Age :${age}</li>
      <li class="list-group-item">Gender :${gender}</li>
      <li class="list-group-item">Address :${address}</li>
      <li class="list-group-item">Password :${password}</li>
    </ul>
    <div class="card" id="rest"><button type="button" class="btn btn-primary" onclick="restform()">Reset</button></div>
  </div>
  `;
    /*document.getElementsByClassName("reset-form").value = formdetalis;*/
}

function restform() {
    document.getElementById("userform").innerHTML = `<form>
    <table class="formtable">
        <tr>
            <div class="mb-3">
                <td><label for="exampleInputEmail1" class="form-label">Email address :</label></td>
                <td><input type="email" class="form-control" id="exampleInputEmail1"
                        aria-describedby="emailHelp" /></td>
            </div>
        </li>
        <tr>
            <div class="mb-3">
                <td><label for="exampleInputusername" class="form-label">Full Name :</label></td>
                <td><input type="text" class="form-control" id="exampleInputUsername1"
                        aria-describedby="userHelp" /></td>
            </div>
        </li>
        <tr>
            <div class="mb-3">
                <td><label for="exampleInputphone" class="form-label">Phone Number :</label></td>
                <td><input type="tel" class="form-control" id="exampleInputphonenumber"
                        aria-describedby="userHelp" /></td>
            </div>
        </li>
        <tr>
            <div class="mb-3">
                <td><label for="exampleInputAge" class="form-label">Age :</label></td>
                <td><input type="number" class="form-control" id="exampleInputAge"
                        aria-describedby="userHelp" /></td>
            </div>
        </li>
        <tr>
            <div class="mb-3">
                <td><label for="exampleInputAge" class="form-label">Gender :</label></td>
                <td><input type="radio" name="Gender" value="Male" class="form-control-gender"
                        id="exampleInputGender" />
                    Male
                    <input type="radio" name="Gender" value="Female" class="form-control-gender"
                        id="exampleInputGender" />
                    Female
                </td>
            </div>
        </li>
        <tr>
            <div class="mb-3">
                <td><label for="exampleInputaddress" class="form-label">Address :</label></td>
                <td><textarea name="Address" rows="2" cols="3" class="form-control"
                        id="exampleInputAddress"></textarea>
                </td>
            </div>
        </li>
        <tr>
            <div class="mb-3">
                <td><label for="exampleInputPassword1" class="form-label">Password :</label></td>
                <td><input type="password" class="form-control" id="exampleInputPassword1" /></td>
            </div>
        </li>
        <tr>
            <td></td>
            <td><button type="submit" class="btn btn-primary" onclick="submitdetail()">
                    Submit
                </button>
            </td>
        </li>
    </table>
</form>`
}
