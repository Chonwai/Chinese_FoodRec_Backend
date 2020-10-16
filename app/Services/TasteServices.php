<?php

namespace App\Services;

use App\DAO\DAOSimpleFactory;
use App\Http\Requests\TasteBasicRules;
use App\Services\BaseServicesInterface;
use App\Utils\ResponseUtils;
use App\Utils\Utils;
use Illuminate\Support\Facades\Validator;

class TasteServices implements BaseServicesInterface
{
    private static $_instance = null;

    private function __construct()
    {
        // Avoid constructing this class on the outside.
    }

    private function __clone()
    {
        // Avoid cloning this class on the outside.
    }

    public static function getInstance()
    {
        if (!(self::$_instance instanceof self)) {
            self::$_instance = new self();
        }
        return self::$_instance;
    }

    public function dataValidation($request, $method)
    {
        switch ($method) {
            case 'responseSpecify':
                $validator = Validator::make(['id' => $request->id], TasteBasicRules::rules());
                break;
            case 'insert':
                $validator = Validator::make($request->all(), TasteBasicRules::rules());
                break;
            default:
                # code...
                break;
        }

        if ($validator->fails()) {
            $res = Utils::integradeResponseMessage(ResponseUtils::validatorErrorMessage($validator), false, 1000);
            return $res;
        } else {
            return true;
        }
    }

    public function responseAll()
    {
        $data = DAOSimpleFactory::createTasteDAO()->getAll();

        return Utils::responseMessage($data, 'unknownProblems');
    }

    public function responseSpecify($request)
    {
        $data = DAOSimpleFactory::createTasteDAO()->getSpecify($request);

        return Utils::responseMessage($data, 'unknownProblems');
    }

    public function insert($request)
    {
        //
    }

    public function update($request)
    {
        //
    }

    public function delete($request)
    {
        //
    }

    public function countAll()
    {
        $data = DAOSimpleFactory::createTasteDAO()->countAll();

        return Utils::responseMessage($data, 'unknownProblems');
    }
}
