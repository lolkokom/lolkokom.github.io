const dropdown = document.getElementById('peopleDropdown');

dropdown.addEventListener('change', function () {
    const selectedPerson = dropdown.value;

    switch (selectedPerson) {
        case 'MARGIT':
            document.body.style.backgroundImage = "url('12.png')";
            document.getElementById("hail").style.display = "block";
            document.getElementById("name").innerHTML = "Boldog Békés Karácsonyi Ünnepeket Dédi!";

            break;
        case 'KAROLY':
            document.body.style.backgroundImage = "url('10.jpg')";
            document.getElementById("hail").style.display = "block";
            document.getElementById("name").innerHTML = "Boldog Békés Karácsonyi Ünnepeket Karesz Papa!";
            break;
        case 'ILONA':
            document.body.style.backgroundImage = "url('14.jpg')";
            document.getElementById("hail").style.display = "block";
            document.getElementById("name").innerHTML = "Boldog Békés Karácsonyi Ünnepeket Ili Mama!";
            break;
        case 'ZSUZSANNA':
            document.body.style.backgroundImage = "url('13.jpg')";
            document.getElementById("hail").style.display = "block";
            document.getElementById("name").innerHTML = "Boldog Békés Karácsonyi Ünnepeket Zsuzsa Mama!";
            break;
        case 'BALINT':
            document.body.style.backgroundImage = "url('11.jpg')";
            document.getElementById("hail").style.display = "block";
            document.getElementById("name").innerHTML = "Boldog Békés Karácsonyi Ünnepeket Bálint!";
            break;
        case 'ANYA':
            document.body.style.backgroundImage = "url('12.jpg')";
            document.getElementById("hail").style.display = "block";
            document.getElementById("name").innerHTML = "Boldog Békés Karácsonyi Ünnepeket Anya!";
            break;
        case 'APA':
            document.body.style.backgroundImage = "url('04.png')";
            document.getElementById("hail").style.display = "block";
            document.getElementById("name").innerHTML = "Boldog Békés Karácsonyi Ünnepeket Apa!";
            break;
        default:
            document.body.style.backgroundImage = "url('15.jpg')";
            document.getElementById("hail").style.display = "none";
            break;
    }
});
