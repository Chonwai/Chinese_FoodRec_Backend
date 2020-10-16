<?php

namespace App\DAO\Ingredient;

use App\DAO\Ingredient\BaseDAOFactory;
use App\Models\User;
use Bolt\Bolt;

class DishDAOFactory implements BaseDAOFactory
{
    public function getAll()
    {
        $bolt = new Bolt($ip = 'localhost', $port = 7687);
        $bolt->setProtocolVersions(4.1);
        $bolt->init('Chinese Regional Cuisine Tiny', 'neo4j', '1234');
        $bolt->run('MATCH (n:Dish) RETURN n');
        return $bolt->pull();
    }

    public function getSpecify($request)
    {
        $data = User::where('id', $request->response_id ? $request->response_id : $request->id)->get();

        return $data;
    }

    public function getSpecifyByFilter($request)
    {
        $bolt = new Bolt($ip = 'localhost', $port = 7687);
        $bolt->setProtocolVersions(4.1);
        $bolt->init('Chinese Regional Cuisine Tiny', 'neo4j', '1234');
        $query = "MATCH (d:Dish)-[r1:is_one_of]->(cc:Chinese_Cuisine {name: '$request->chinese_cuisine'}), (d:Dish)-[r2:has_ingredient]->(i:Ingredient), (d:Dish)-[r3:has_taste]->(t:Taste) WHERE i.name =~'.*$request->ingredient.*' AND t.name =~'.*$request->taste.*' RETURN DISTINCT d";
        $bolt->run($query);
        return $bolt->pull();
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
