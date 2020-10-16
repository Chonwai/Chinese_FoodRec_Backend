<?php

namespace App\Http\Controllers\Apis;

use App\Http\Controllers\Controller;
use App\Services\DishServices;
use Illuminate\Http\Request;

class DishController extends Controller implements BaseControllerInterface
{
    public function responseAll()
    {
        $data = DishServices::getInstance()->responseAll();

        return response()->json($data, 200);
    }

    public function responseSpecify(Request $request)
    {
        $status = ChineseCuisineServices::getInstance()->dataValidation($request, 'responseSpecify');

        if ($status === true) {
            $res = ChineseCuisineServices::getInstance()->responseSpecify($request, 'api');
            return $res;
        } else {
            return response()->json($status, 200);
        }
    }

    public function responseSpecifyByFilter(Request $request)
    {
        $data = DishServices::getInstance()->responseSpecifyByFilter($request);

        return response()->json($data, 200);
    }

    public function insert(Request $request)
    {
        //
    }

    public function update(Request $request)
    {
        //
    }

    public function delete(Request $request)
    {
        //
    }
}
