<?php

namespace App\DAO\Ingredient;

use App\DAO\Ingredient\BaseDAOFactory;
use App\Models\User;
use App\Utils\BoltUtils;

class ChineseCuisineDAOFactory implements BaseDAOFactory
{
    public function getAll()
    {
        $bolt = BoltUtils::makeConnect();
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
