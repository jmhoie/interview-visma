# Jan Markus Høie - Visma Interview Case
Frontend: `SvelteKit` + `TypeScript`
Backend: `Python FastAPI`

To run the whole project both the frontend and backend servers must be started.


## Backend
Backend runs on `http://0.0.0.0:80`.

The backend can be run in a container using `Docker`:
```bash
cd backend
docker build -t backend_img .
docker run -it --rm --name backend -p 80:80 backend_img
```
or without Docker:
```bash
cd backend

# recommended: create a virtual env
python3 -m venv .venv
source .venv/bin/activate

# install the dependencies (FastAPI + Pydantic)
pip install -r requirements.txt

# run
fastapi dev main.py
```


## Frontend
Frontend runs on `localhost:5173` (vitejs default).
```bash
cd frontend
npm install
npm run dev -- --open
```
