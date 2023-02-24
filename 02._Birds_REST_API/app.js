const express = require("express");
const app = express();

app.use(express.json());// we do this to pass the body as json

//Represents the table in the database
const byrds = [];

//Populating array with byrds
const byrd1 = {
  id: 1,
  name: "Pygoscelis papua",
  commonName: "Gentoo Penguin",
  wikiArticle: "https://en.wikipedia.org/wiki/Gentoo_penguin",
  image: "https://upload.wikimedia.org/wikipedia/commons/0/00/Brown_Bluff-2016-Tabarin_Peninsula%E2%80%93Gentoo_penguin_%28Pygoscelis_papua%29_03.jpg"
};

const byrd2 = {
  id: 2,
  name: "Phoenicopterus roseus",
  commonName: "Greater Flamingo",
  wikiArticle: "https://en.wikipedia.org/wiki/Greater_flamingo",
  image: "https://upload.wikimedia.org/wikipedia/commons/7/79/Greater_flamingo_%28Phoenicopterus_roseus%29_Bahrain.jpg"
};

const byrd3 = {
  id: 3,
  name: "Casuarius casuarius",
  commonName: "Southern Cassowary",
  wikiArticle: "https://en.wikipedia.org/wiki/Southern_cassowary",
  image: "https://upload.wikimedia.org/wikipedia/commons/a/af/Casuarius_casuarius_161203092.png"
};

const byrd4 = {
  id: 4,
  name: "Fratercula arctica",
  commonName: "Atlantic Puffin",
  wikiArticle: "https://en.wikipedia.org/wiki/Atlantic_puffin",
  image: "https://upload.wikimedia.org/wikipedia/commons/c/c4/Puffin_%28Fratercula_arctica%29.jpg"
};


//Populating the 'table'
byrds.push(byrd1, byrd2, byrd3, byrd4);

//HTTP intro Page
app.get("/", (req, res) => {
  res.send(
    `<!DOCTYPE html>
    <html>
      <head>
        <title>The World of Byrds</title>
        <style>
          body {
            background-image: url("https://upload.wikimedia.org/wikipedia/commons/d/d1/Canterino_Gallo.jpg");
            background-size: cover;
            color: white;
            font-family: Arial, sans-serif;
          }
          .container {
            margin: 50px auto;
            max-width: 800px;
            text-align: center;
          }
          h1 {
            font-size: 3em;
            margin-bottom: 20px;
          }
          h3 {
            font-size: 2em;
            margin-bottom: 20px;
          }
          p {
            font-size: 1.5em;
            margin-bottom: 10px;
          }
          a {
            text-align: center;
            font-size: 1.5em;
            color: blue;
            text-decoration: none;
          }
      
          a:hover {
            color: white;
          }
          img {
            max-width: 100%;
            margin-bottom: 20px;
          }
        </style>
      </head>
      <body>
        <div class="container">
          <h1>The World of Byrds</h1>
          <img src="https://images.unsplash.com/photo-1581362662614-dd27d9eb9291?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2348&q=80" alt="byrds">
          <h3>Find the Byrds with these Endpoints:</h3>
          <p><a href="localhost:8080/byrds/" target="_blank">/byrds</a></p>
          <p><a href="localhost:8080/byrds/name/Papua" target="_blank">/byrds/name/{name} (example Gentoo)</a></p>
          <p><a href="localhost:8080/byrds/commonName/Flamingo" target="_blank">/byrds/commonName/{commonName} (example Flamingo)</a></p>
          <br>
          <img src="https://images.unsplash.com/photo-1594697279862-1c0a41714940?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1364&q=80" alt="byrds">
        </div>
      </body>
    </html>
    `
  );
});

//GET all
app.get("/byrds", (req, res) => {
  res.send({ data: byrds }); //{data: byrds} gives out 
});


//GET by id
app.get("/byrds/:id", (req, res) => {
  const byrdById = byrds.find(byrd => byrd.id === Number(req.params.id));

  //byrds.find(byrd => byrd.id === req.params.id)

  if (byrdById) {
    res.send(resultHTTP(byrdById));
  } else {
    res.status(404).send("byrd not found");
  }
});

//GET by name
app.get("/byrds/name/:byrdName", (req, res) => {
  const found = byrds.find(
    (byrd) => byrd.name.toLowerCase().includes(req.params.byrdName.toLowerCase())
  );

  if (found) {
    res.send(found);
  } else {
    res.status(404).send("byrd not found");
  }
});

//GET by classification
app.get("/byrds/commonName/:commonName", (req, res) => {
  const found = byrds.find(
    (byrd) =>
      byrd.commonName.toLowerCase().includes(req.params.commonName.toLowerCase())
  );

  //filter returns an array

  if (found) {
    res.send(found);
  } else {
    res.status(404).send("byrd not found");
  }
});

let nextId = 4

//POST
app.post("/byrds", (req, res) => {
  const body = req.body;
  const newId = ++nextId;
  console.log(nextId);
  const newByrd = { id: newId, ...body };
  byrds.push(newByrd);

  res.send({ data: newByrd });
})

//PUT
app.put("/byrds/", (req, res) => {
  const body = req.body;
  const newByrd = { ...body };
  byrds.splice(newByrd.id - 1, 1, newByrd)
  res.send({ data: newByrd });
})

//DELETE by id
app.delete("/byrds/:id", (req, res) => {
  const foundIndex = byrds.findIndex(byrd => byrd.id === Number(req.params.id))
  if (foundIndex === -1) {
    res.status(404).send({ data: foundIndex, message: `No byrd found with id ${req.params.id}` })
  } else {
    byrds.splice(foundIndex, 1)
    res.status(200).send({ data: foundIndex, message: `Byrd with id ${req.params.id} eliminated` })
  }
});

// //PATCH 
// app.patch("/byrds/", (req, res) => {
//   const body = req.body;
//   const updatedByrd = { ...body };
//   byrds.splice(updatedByrd.id - 1, 1, updatedByrd)
//   res.send({ data: updatedByrd });
// })

//PATCH ANDERS
app.patch("/byrds/:id", (req, res) => {
  const foundIndex = byrds.findIndex(byrd => byrd.id === Number(req.params.id))
  if (!foundIndex === -1) {
    res.status(404).send({ data: foundIndex, message: `No byrd found with id ${req.params.id}` })
  } else {
    const foundByrd = byrds[foundIndex]
    const birdToPatch = {...foundByrd, ...req.body, id:foundByrd.id}// Spread takes the body from the first, then from the second, then the id from the last
    byrds[foundIndex] = birdToPatch;
    res.status(200).send({ data: foundByrd, message: `Byrd with id ${req.params.id} patched` })
  }
})

function resultHTTP(byrd) {
  return `<!DOCTYPE html>
<html>
<head>
	<title>Bird Information</title>
	<style>
		body {
			background-color: skyblue;
		}

		h1 {
			text-align: center;
			font-size: 2.5em;
		}

		img {
			display: block;
			margin: 0 auto;
			max-width: 300px;
			height: auto;
		}

		p {
			text-align: center;
			font-size: 1.5em;
		}

		a {
			text-align: center;
			font-size: 1.5em;
			color: black;
			text-decoration: none;
		}

    a:hover {
			color: white;
		}
	</style>
</head>
<body>
	<h1>Bird Information</h1>
	<img src="${byrd.image}" alt="Bird Photo">
	<p><strong>Name: </strong>${byrd.name}</p>
	<p><strong>Common Name: </strong>${byrd.commonName}</p>
	<p><strong></strong><a href="${byrd.wikiArticle}" target="_blank">${byrd.commonName} on Wikipedia</a></p>
  <p><strong></strong><a href="http://localhost:8080" target="_blank">Back</a></p>
</body>
</html>`

}


//Port
app.listen(8080, () => {
  console.log("Server is running on port: ", 8080)
});