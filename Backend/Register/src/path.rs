use sqlx::{Pool,Postgres};
use be_erp::{add_account,};
use tide::{Server};

pub fn path(app: &mut Server<Pool<Postgres>>){


app.at("register").post(add_account);


}