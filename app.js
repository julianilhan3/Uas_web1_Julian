// Menyimpan data pengguna
const users = [];

// Referensi ke form dan elemen lain
const form = document.getElementById('registration-form');
const userList = document.getElementById('user-list').getElementsByTagName('tbody')[0];

// Menangani submit form
form.addEventListener('submit', function (e) {
    e.preventDefault();

    // Mengambil data dari form
    const name = document.getElementById('name').value;
    const address = document.getElementById('address').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;

    // Membuat objek pengguna
    const newUser = {
        name,
        address,
        email,
        phone
    };

    // Menambah pengguna ke array
    users.push(newUser);

    // Menambahkan pengguna ke dalam tabel
    addUserToTable(newUser);

    // Reset form setelah submit
    form.reset();
});

// Menambahkan pengguna ke dalam tabel
function addUserToTable(user) {
    const row = userList.insertRow();

    const cell1 = row.insertCell(0);
    cell1.textContent = user.name;

    const cell2 = row.insertCell(1);
    cell2.textContent = user.address;

    const cell3 = row.insertCell(2);
    cell3.textContent = user.email;

    const cell4 = row.insertCell(3);
    cell4.textContent = user.phone;
}



