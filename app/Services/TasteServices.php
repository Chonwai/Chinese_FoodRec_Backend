<?php

namespace App\Services;

use App\DAO\DAOSimpleFactory;
use App\Http\Requests\User\TasteBasicRules;
use App\Jobs\SendSubscriptionMailJob;
use App\Services\BaseServicesInterface;
use App\Utils\ResponseUtils;
use App\Utils\Utils;
use Carbon\Carbon;
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

    /**
     * Response the data.
     *
     * @param {string} [operation=api] - For API case and it will return the status, error code and data.
     * @param {string} [operation=ssr] - For SSR case and it only return data not include the status and error code.
     * @return Array|Number
     */
    public function responseAll($operation)
    {
        $data = DAOSimpleFactory::createTasteDAO()->getAll();

        return Utils::responseSSRorAPIFormat($data, $operation, 'unknownProblems');
    }

    /**
     * Response the data.
     *
     * @param {string} [operation=api] - For API case and it will return the status, error code and data.
     * @param {string} [operation=ssr] - For SSR case and it only return data not include the status and error code.
     * @return Array|Number
     */
    public function responseSpecify($request, $operation)
    {
        $data = DAOSimpleFactory::createTasteDAO()->getSpecify($request);

        return Utils::responseSSRorAPIFormat($data, $operation, 'unknownProblems');
    }

    /**
     * Response the data.
     *
     * @param {string} [operation=api] - For API case and it will return the status, error code and data.
     * @param {string} [operation=ssr] - For SSR case and it only return data not include the status and error code.
     * @return Array|Number
     */
    public function insert($request, $operation)
    {
        $data = DAOSimpleFactory::createSubscriptionsDAO()->insert($request);

        if ($data) {
            SendSubscriptionMailJob::dispatch($request->all())->delay(Carbon::now()->addSeconds(5));
        }

        return Utils::responseSSRorAPIFormat($data, $operation, 'fail');
    }

    /**
     * Response the data.
     *
     * @param {string} [operation=api] - For API case and it will return the status, error code and data.
     * @param {string} [operation=ssr] - For SSR case and it only return data not include the status and error code.
     * @return Array|Number
     */
    public function update($request, $operation)
    {

    }

    /**
     * Response the data.
     *
     * @param {string} [operation=api] - For API case and it will return the status, error code and data.
     * @param {string} [operation=ssr] - For SSR case and it only return data not include the status and error code.
     * @return Array|Number
     */
    public function delete($request, $operation)
    {

    }

    /**
     * Response the data.
     *
     * @param {string} [operation=api] - For API case and it will return the status, error code and data.
     * @param {string} [operation=ssr] - For SSR case and it only return data not include the status and error code.
     * @return Array|Number
     */
    public function countAll($operation)
    {
        $data = DAOSimpleFactory::createTasteDAO()->countAll();

        return Utils::responseSSRorAPIFormat($data, $operation, 'unknownProblems');
    }
}
