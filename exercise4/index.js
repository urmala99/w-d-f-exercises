const express = require('express')
const app = express()
const bodyParser = require('body-parser');
const port = 3000
const { v4: uuidv4 } = require('uuid');

app.use(bodyParser.json());


let products =[
    {
        id: uuidv4(),
        name: "KG241QS",
        manufacturer: "Acer",
        category: "Screen",
        description: "165Hz (OC) Full HD -pelimonitori",
        price: 169.00,
        img: "https://jwimg.azureedge.net/product/6/2/266467-b800443_300x300.jpg"
        
      },
      {
        id: uuidv4(),
        name: "Odyssey G5",
        manufacturer: "Samsung",
        category: "Screen",
        description: "144Hz kaareva WQHD-pelimonitori",
        price: 299.00,
        img:"https://jwimg.azureedge.net/product/2/6/339423-b437443_300x300.jpg"
        
      },
      {
        id: uuidv4(),
        name: "ZOWIE XL2411P",
        manufacturer: "BenQ",
        category: "Screen",
        description: "144Hz e-Sports -monitori",
        price: 199.00,
        img: "https://jwimg.azureedge.net/product/2/2/183827-b307420_300x300.jpg"
       
      },
      {
        id: uuidv4(),
        name: "LF24T352FHUXEN",
        manufacturer: "Samsung",
        category: "Screen",
        description: "Full HD -monitori",
        price: 99.00,
        img: "https://jwimg.azureedge.net/product/0/6/345003-b346045_300x300.jpg"
      },
      {
        id: uuidv4(),
        name: "Nitro VG270UPbmiipx",
        manufacturer: "Asus",
        category: "Screen",
        description: "144Hz WQHD -pelimonitori",
        price: 349.00,
        img: "https://jwimg.azureedge.net/product/6/2/290367-b872143_300x300.jpg"
      },
      {
        id: uuidv4(),
        name: "TUF Gaming VG27AQ",
        manufacturer: "Asus",
        category: "Screen",
        description: "165Hz (OC) WQHD -pelimonitori",
        price: 389.00,
        pic: "https://jwimg.azureedge.net/product/8/6/343083-b736219_300x300.jpg"
        
      },
      {
        id: uuidv4(),
        name: "TUF Gaming VG24VQ",
        manufacturer: "Asus",
        category: "Screen",
        description: "kaareva 144Hz Full HD -pelimonitori",
        price: 199.00,
        img: "https://jwimg.azureedge.net/product/7/7/306472-b575677_300x300.jpg"
      },
      {
        id: uuidv4(),
        name: "Nitro XV282K KV",
        manufacturer: "Acer",
        category: "Screen",
        description: "144Hz 4K UHD -pelimonitori",
        price: 769.00,
        pic: "https://jwimg.azureedge.net/product/5/4/330455-b661952_300x300.jpg"
      }
    
];

let users = [
    {
        id:uuidv4(),
        client: "Meikä Mandoliini",
        age: 21,
        address: "Metsätie 7"
      },
      {
        id:uuidv4(),
        client: "Manda Riini",
        age: 22,
        address: "Koivutie 8"
      }
];

let invoices = [
    {
        id:uuidv4(),
        client: "Meikä Mandoliini",
        balance: 816
      },
      {
      id:uuidv4(),
      client: "Manda Riini",
      balance: 816
      }
];



/*GET all products*/

    app.get('/products', (req, res) => {
    res.json(products);
})


/*GET all users*/

    app.get('/users', (req, res) => {
    res.json(users);
})

/*GET all invoices*/

    app.get('/invoices', (req, res) => {
    res.json(invoices);
})


/*GET single product*/

    app.get('/products/:id', (req, res) => {
    const search = products.find(d => d.id === req.params.id);
    res.json(search);
})

/*GET single user*/

    app.get('/users/:id', (req, res) => {
    const search = users.find(d => d.id === req.params.id);
    res.json(search);
})

/*GET invoice based on user*/

    app.get('/invoices/:client', (req, res) => {
    const search = invoice.filter(invoice => invoice.client === req.params.client)
    res.json(search);
  })

/*GET ivoice based on id*/
    app.get('/invoices/id/:id', (req, res) => {
    const search = invoices.filter(invoices => invoices.id === req.params.id)
    res.json(search);
    })  

/*GET search product based on name*/

    app.get('/product/name/:name', (req, res) => {
    const search = product.find(user => user.name === req.params.name)
    res.json(search);
  })

/*GET search product based on manufacturer*/
    app.get('/product/manufacturer/:manufacturer', (req, res) => {
    const search = product.filter(product => product.manufacturer === req.params.manufacturer)
    res.json(search);
  })

 /*GET search product based on category*/
 
    app.get('/product/category/:category', (req, res) => {
    const search = product.filter(product => product.category === req.params.category)
    res.json(search);
  })

/*POST create product*/

    app.post('/products', (req, res) => {
    products.push({
        id: uuidv4(),
        name: req.body.name,
        manufacturer: req.body.manufacturer,
        category: req.body.category,
        description: req.body.description,
        price: req.body.price,
        pic: req.body.pic
    })
    console.log(req.body);
    res.json('Created a new product');
})

/*POST create user*/

    app.post('/users', (req, res) => {
    console.log('Creating a new user');
    users.push({
        id: uuidv4(),
        client: req.body.client,
        age: req.body.age,
        address: req.body.address
    })
    console.log(req.body);
    res.json('Created a new user');
})

/*POST create invoice*/
    app.post('/invoices', (req, res) => {
    console.log('Creating a new invoice');
    invoices.push({
        id: uuidv4(),
        clientName: req.body.clientName,
        balance: req.body.balance
    })
    console.log(req.body);
    res.json('Created a new invoice');
})


/*PUT modify product*/

    app.put('/products/:id', (req, res) => {
            const search = products.find(d => d.id === req.params.id);
            search.name = req.body.name;
            search.manufacturer = req.body.manufacturer;
            search.category = req.body.category;
            search.description = req.body.description;
            search.price = req.body.price;
            search.pic = req.body.pic;
            res.json('Modified product ' + req.params.id);
            console.log(req.body);
        })




/*DELETE all products*/
    app.delete('/products', (req, res) => {
    products = "";
    console.log(req.body);
    res.json('Delete all products');
})

/*DELETE all users*/
    app.delete('/users', (req, res) => {
    users = "";
    console.log(req.body);
    res.json('Delete all users');
})
/*DELETE all invoices*/
    app.delete('/invoices', (req, res) => {
    invoices = "";
    console.log(req.body);
    res.json('Delete all invoices');
})


/*DELETE single product*/
app.delete('/products/:id', (req, res) => {
    products = products.filter((i) => i.id !== req.params.id);
    res.json('Product ' + req.params.id + ' deleted');
})

/*DELETE single user*/
    app.delete('/users/:id', (req, res) => {
    users = users.filter((i) => i.id !== req.params.id);
    res.json('User ' + req.params.id + ' deleted');
})

/*DELETE single invoice*/
    app.delete('/invoices/:id', (req, res) => {
    invoices = invoices.filter((i) => i.id !== req.params.id);
    res.json('Invoice ' + req.params.id + ' deleted');
})
    app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`)
})
