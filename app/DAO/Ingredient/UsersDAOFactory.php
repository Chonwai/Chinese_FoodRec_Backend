<?php

namespace App\DAO\Ingredient;

use App\DAO\Ingredient\BaseDAOFactory;
use App\Models\User;
use App\Utils\GenerateUtils;
use Illuminate\Support\Str;

class UsersDAOFactory implements BaseDAOFactory
{
    public function getAll()
    {
        $data = User::paginate(20);
        return $data;
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
