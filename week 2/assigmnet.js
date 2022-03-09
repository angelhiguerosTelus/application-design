// Angel Higueros
// Assigmnet 2s

const http = require("http");

let songs = [];

function response(req, res, code, msg) {
  res.statusCode = code;
  res.end(msg);
}

async function parseData(request) {
  let data = "";

  await request.on("data", function (chunk) {
    data += chunk;
  });

  return JSON.parse(data);
}

function getParams(req) {
  let params = req.url.split("/");
  params = params.filter((p) => p !== "");
  return params;
}

async function doOnRequest(req, res) {
  switch (req.method) {
    case "GET":
      let params = getParams(req);

      if (req.url === "/" && params.length === 0 ) {
        response(req, res, 200, "Assigment 2 - Angel Higueros");
      } else if (req.method === "GET" && params.length === 1) {
        response(req, res, 404, JSON.stringify(songs));
      } else if (req.method === "GET" && params.length === 2) {
        let id = parseInt(params[1]);
        let song = songs.filter((s) => s.id === id);

        if (song.length === 0) {
          response(req, res, 404, "Error: Not found");
        } else {
          response(req, res, 200, JSON.stringify(song));
        }
      } else {
        response(req, res, 404, "Error: Not found");
      }

      break;

    case "POST":
      if (req.url === "/song") {
        let song = await parseData(req);
        songs.push({ ...song });
        response(
          req,
          res,
          200,
          JSON.stringify({
            id: song.id,
            action: "New song added",
          })
        );
      } else {
        response(req, res, 404, "Error: Not found");
      }
      break;

    case "PUT":
      let params1 = getParams(req);

      if (req.method === "PUT" && params1.length === 2) {
        let id = parseInt(params1[1]);
        let newSong = await parseData(req);
        songs = songs.map((s) => (s.id === id ? newSong : s));

        response(
          req,
          res,
          200,
          JSON.stringify({
            id: newSong.id,
            action: "Song updated",
          })
        );
      } else {
        response(req, res, 404, "Error: Not found");
      }

      break;
    case "DELETE":
      let params2 = getParams(req);

      if (req.method === "DELETE" && params2.length === 2) {
        let id =parseInt(params2[1]);

        songs = songs.filter((s) => s.id !== id);
        response(
          req,
          res,
          200,
          JSON.stringify({
            id,
            action: "Song deleted",
          })
        );
      } else {
        response(req, res, 404, "Error: Not found");
      }

      break;
    default:
      response(req, res, 404, "Error: Not found");
  }
}

const server = http.createServer(doOnRequest);
server.listen(80, () => {
  console.log("Server listen to http://localhost ");
  
});
