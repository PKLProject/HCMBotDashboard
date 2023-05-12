use serde::Deserialize;
use sqlx::PgPool;
use tide::{Request, Response, Body, http};
use crate::ws_response;
use serde::{Serialize};
use serde_json::json;



#[derive(serde::Serialize, Debug ,Deserialize)]
struct Epass {
    email : Option<String>,
    password : String,
    
}


pub async fn add_account(mut req : Request<PgPool>) -> tide::Result<Response> {
    let param : Epass = req.body_json().await?;
    let pool = req.state();
     
     match
     sqlx::query("INSERT INTO public.user (email, password) VALUES ($1,sha256($2));")
     .bind(param.email)
     .bind(param.password.as_bytes())
     .execute(pool).await
     {
        Ok(_x) => {ws_response("OK", "Berhasil insert ke login")},
        Err(e) => {
            println!("error insert : {:?}",e);
            ws_response("Error", "Gagal insert ke login")
        }

     }

}

