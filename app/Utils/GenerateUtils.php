<?php

namespace App\Utils;

use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Str;

class GenerateUtils
{
    public static function generateUUID()
    {
        $id = Str::uuid()->toString();
        return $id;
    }

    public static function generateAttachmentPath($path)
    {
        $s3 = Storage::disk('s3')->getAdapter()->getClient();
        $globalPath = $s3->getObjectUrl(env('AWS_BUCKET'), $path);
        return $globalPath;
    }

    public static function generateValidationMailObject($email, $buyer_firstname, $user_id)
    {
        $accessObject = (object) ['email' => $email, 'buyer_firstname' => $buyer_firstname, 'user_id' => $user_id];
        return $accessObject;
    }

    public static function generateImageName($request)
    {
        $name = Str::random(20) . '.' . str_replace('image/', '', $request->mime());
        return $name;
    }

    /**
     * Generate ORM Insert Object which can directly insert to DB by ORM.
     *
     * @method
     * @return Array
     */
    public static function generateORMInsertObject($originalArray, $additionalArray)
    {
        return array_merge($originalArray, $additionalArray);
    }
}
