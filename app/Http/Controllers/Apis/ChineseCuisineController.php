<?php

namespace App\Http\Controllers\Apis;

use App\Http\Controllers\Apis\BaseControllerInterface;
use App\Http\Controllers\Controller;
use App\Services\ChineseCuisineServices;
use Illuminate\Http\Request;

class ChineseCuisineController extends Controller implements BaseControllerInterface
{
    public function responseAll()
    {
        $data = ChineseCuisineServices::getInstance()->responseAll($operation = 'api');

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

    public function insert(Request $request)
    {
        $status = ChineseCuisineServices::getInstance()->dataValidation($request, 'insert');

        if ($status === true) {
            $res = ChineseCuisineServices::getInstance()->insert($request, $operation = 'api');
            return $res;
        } else {
            return response()->json($status, 200);
        }
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
