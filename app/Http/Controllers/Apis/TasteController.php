<?php

namespace App\Http\Controllers\Apis;

use App\Http\Controllers\Apis\BaseControllerInterface;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class TasteController extends Controller implements BaseControllerInterface
{
    public function responseAll()
    {
        $data = TasteServices::getInstance()->responseAll($operation = 'api');

        return $data;
    }

    public function responseSpecify(Request $request)
    {
        $status = TasteServices::getInstance()->dataValidation($request, 'responseSpecify');

        if ($status === true) {
            $res = TasteServices::getInstance()->responseSpecify($request, 'api');
            return $res;
        } else {
            return response()->json($status, 200);
        }
    }

    public function insert(Request $request)
    {
        $status = TasteServices::getInstance()->dataValidation($request, 'insert');

        if ($status === true) {
            $res = TasteServices::getInstance()->insert($request, $operation = 'api');
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
