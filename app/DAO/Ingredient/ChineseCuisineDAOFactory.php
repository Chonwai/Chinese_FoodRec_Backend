<?php

namespace App\DAO\Ingredient;

use App\DAO\Ingredient\BaseDAOFactory;
use App\Models\User;
use Bolt\Bolt;

class ChineseCuisineDAOFactory implements BaseDAOFactory
{
    public function getAll()
    {
        $bolt = new Bolt($ip = 'localhost', $port = 7687);
        $bolt->setProtocolVersions(4.1);
        $bolt->init('Chinese Regional Cuisine Tiny', 'neo4j', '1234');
        $bolt->run('MATCH (n:Chinese_Cuisine) RETURN n');
        return $bolt->pull();
    }

    public function getSpecify($request)
    {
        $data = User::where('id', $request->response_id ? $request->response_id : $request->id)->get();

        return $data;
    }

    public function insert($request)
    {
        //
    }

    public function delete($request)
    {
        //
    }

    public function update($request)
    {
        //
    }

    public function countAll()
    {
        //
    }
}