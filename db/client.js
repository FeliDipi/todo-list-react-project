import { createClient } from "@libsql/client";

const client = createClient({
    url: import.meta.env.VITE_DATABASE_URL ?? "",
    authToken: import.meta.env.VITE_DATABASE_AUTHTOKEN ?? ""
});

export const getTodoDB = async () =>
{
    const response = await client.execute({
        sql:`SELECT * FROM Todos`,
        args:[]
    });

    return response;
}

export const addTodoDB = async ({title, description}) =>
{
    const response = await client.execute({
        sql:`INSERT INTO Todos (todo_title, todo_description) VALUES (?,?)`,
        args:[title,description]
    });
    
    return response;
}

export const updateTodoDB = async ({id,title,description,isCompleted}) =>
{
    const response = await client.execute({
        sql:`UPDATE Todos SET todo_title = ? , todo_description = ? , todo_isCompleted = ? WHERE todo_id = ?`,
        args:[title,description,isCompleted,id]
    })

    return response;
}

export const removeTodoDB = async ({id}) =>
{
    const response = await client.execute({
        sql:`DELETE FROM Todos WHERE todo_id = ?`,
        args:[id]
    })

    return response;
}