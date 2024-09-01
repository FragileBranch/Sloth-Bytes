function loves_me(petalCount){
    let petalArray = [];
    for(let p=1;p<=petalCount;p++){
        let s = (p % 2 == 0) ? 'Loves me not' : 'Loves me';
        if (p==petalCount){
            s = s.toUpperCase();
        }
        petalArray.push(s);
    }
    console.log(petalArray.join(', '));
}

loves_me(3);
loves_me(6);
loves_me(1);