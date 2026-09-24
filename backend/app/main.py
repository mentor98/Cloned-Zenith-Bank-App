from fastapi import FastAPI, HTTPException
from pydantic import BaseModel
from datetime import datetime

app = FastAPI(title='Zenith Banking Clone API', version='1.0.0')

class LoginRequest(BaseModel):
    username: str
    password: str

@app.get('/api/health')
def health():
    return {'status':'ok','service':'zenith-banking-clone'}

@app.post('/api/auth/login')
def login(payload: LoginRequest):
    if not payload.username or not payload.password:
        raise HTTPException(status_code=400, detail='Username and password are required')
    return {'authenticated': True, 'user': {'name': payload.username}, 'issued_at': datetime.utcnow().isoformat()}

@app.get('/api/services')
def services():
    return {'services': ['Home','Pay Bills','Airtime','Transfer','Cards','Locate Us','Manage Beneficiaries','Forex','Product & Services','Personal Finance Manager','LifeStyle','Settings','Alerts','QR Payments','Profile','Upcoming Payment']}

@app.get('/api/products')
def products():
    return {'products': ['Open Additional Account','Request Loan','Cheques','Bank Draft Request','My Bank Statement','Dubai Visa','Manage Transfer Limits']}

@app.get('/api/activities')
def activities():
    return {'activities': [
        {'title':'Modify Address','date':'August 19, 2021'},
        {'title':'Statement Request','date':'August 19, 2021'}
    ]}
