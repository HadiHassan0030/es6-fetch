let url = 'https://jsonbox.io/box_91b7fdf95b11e21b4235';


fetch(url)
    .then(res => res.json())
    .then(data => {

        let h1 = document.createElement('h1');
        h1.textContent = 'NUMBER OF ACTORS: ' + data[0].numberOfActors;
        document.querySelector('main').insertAdjacentElement('beforebegin', h1);











        data[0].actors.forEach((i) => {


            let p = document.createElement('p');
            let p2 = document.createElement('p');
            let p3 = document.createElement('p');


            p.textContent = 'ACTOR: ' + i.firstName + ' ' + i.lastName;
            p2.textContent = '  MOVIES:  ' + i.Movies

            document.querySelector('main').appendChild(p);
            document.querySelector('main').appendChild(p2);
        });





    })
    .catch(err => console.log(err))