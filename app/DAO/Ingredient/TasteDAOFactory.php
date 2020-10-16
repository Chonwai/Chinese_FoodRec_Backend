<?php

namespace App\DAO\Ingredient;

use App\DAO\Ingredient\BaseDAOFactory;
use App\Models\User;
use App\Utils\GenerateUtils;
use Bolt\Bolt;
use Illuminate\Support\Str;

class TasteDAOFactory implements BaseDAOFactory
{
    public function getAll()
    {
        $bolt = new Bolt($ip = 'localhost', $port = 7687);
        $bolt->setProtocolVersions(4.1);
        $bolt->init('Chinese Regional Cuisine Tiny', 'neo4j', '1234');
        $bolt->run('MATCH (n:Taste) RETURN n');
        return $bolt->pull();
    }

    public function getSpecify($request)
    {
        $data = User::where('id', $request->response_id ? $request->response_id : $request->id)->get();

        return $data;
    }

    public function insert($request)
    {
        $status = User::create(GenerateUtils::generateORMInsertObject($request->all(), ['id' => Str::uuid()->toString()]));
        return $status;
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
        $data = User::all()->count();
        return $data;
    }
}
